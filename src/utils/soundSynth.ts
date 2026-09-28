/**
 * Ambient Audio Synthesizer for Ahmed Rafin Portfolio
 * Generates soft, meditative, ultra-quiet warm frequencies using Web Audio API.
 * Completely optional, muted by default.
 */

class SoundSynth {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;

  public init() {
    if (this.ctx || typeof window === 'undefined') return;
    try {
      const AudioCtor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtor) return;
      this.ctx = new AudioCtor();
    } catch {
      this.ctx = null;
    }
  }

  public toggleMute(): boolean {
    this.init();
    if (!this.ctx) return true;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbientDrone();
      this.playChime(440, 0.05); // pleasant chime confirmation
    } else {
      this.stopAmbientDrone();
    }

    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  private startAmbientDrone() {
    if (!this.ctx) return;

    // Create low meditative hum (A2 = 110Hz and E3 = 164.81Hz)
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.015, this.ctx.currentTime); // very low ambient volume

    this.osc1 = this.ctx.createOscillator();
    this.osc2 = this.ctx.createOscillator();

    this.osc1.type = 'sine';
    this.osc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2

    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(164.81, this.ctx.currentTime); // E3

    // Low pass filter for warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    this.osc1.connect(filter);
    this.osc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    this.osc1.start();
    this.osc2.start();
  }

  private stopAmbientDrone() {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
        } catch {
          // ignore
        }
      }, 500);
    }
  }

  public playHoverPop() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.008, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // ignore
    }
  }

  public playChime(freq = 587.33, volume = 0.03) { // D5 chime
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.6);
    } catch {
      // ignore
    }
  }
}

export const soundSynth = new SoundSynth();
