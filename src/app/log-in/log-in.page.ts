import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  public login: any = { email: '', password: '' };
  private correctEmail = 'khuram@gmail.com';
  private correctPassword = '1234KS@@';
  public wrongAttempts: number = 0;
  public isLocked: boolean = false;
  public lockTimeout: number = 0;
  public currentLockDuration: number = 10; // Initial lock duration is 10 seconds
  public permanentlyDisabled: boolean = false;

  // Password validation status
  public isPasswordValid: boolean = false;

  // For password visibility toggle
  public passwordType: string = 'password';
  public passwordIcon: string = 'eye-off';
 button=["alert"]
  constructor(public alertController: AlertController, public router: Router, alert:AlertService) {}
  doRefresh(event: any) {
    console.log('Refreshing page...');
    
    // Simulating a short delay
    setTimeout(() => {
      // Stop the refresh animation
      event.target.complete();
      
      // Full page reload to refresh content
      window.location.reload();
    }, 1000); // 1 second delay
  }
  ngOnInit() {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      // Redirect to p9 if already logged in
      this.router.navigate(['/p9'], { replaceUrl: true });
    }
  }

  // Function to toggle password visibility
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  // Function to show an Ionic Alert
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Function to submit the form
  submit() {
    if (this.isLocked || this.permanentlyDisabled) return; // Prevent login attempts if form is locked or permanently disabled

    if (this.login.email === this.correctEmail && this.login.password === this.correctPassword) {
      this.showAlert('Success', 'You have logged in successfully!');
      console.log('Login successful: ', this.login);
      localStorage.setItem('isLoggedIn', 'true'); 
      this.router.navigate(['/homepage-full']); // Redirect to homepage on successful login
      this.wrongAttempts = 0; // Reset wrong attempts on success
      this.currentLockDuration = 10; // Reset lock duration
    } else {
      if (this.login.email !== this.correctEmail) {
        this.showAlert('Error', 'Your email is incorrect.');
        console.error('Email is incorrect:', this.login.email);
      } else {
        this.showAlert('Error', 'Your password is incorrect.');
        console.error('Password is incorrect:', this.login.password);
      }

      // Increment wrongAttempts if login fails
      this.wrongAttempts++;

      // Lock the password field after 3 failed attempts
      if (this.wrongAttempts >= 3) {
        this.lockPasswordField();
      }
    }
  }

  // Function to lock the password field for an increasing duration
  lockPasswordField() {
    this.isLocked = true;
    this.lockTimeout = this.currentLockDuration; // Set lockTimeout to the current lock duration

    const interval = setInterval(() => {
      this.lockTimeout--;
      if (this.lockTimeout === 0) {
        clearInterval(interval);
        this.isLocked = false; // Unlock the password field after the countdown

        // If the current lock was for 10 seconds, next lock will be for 60 seconds
        if (this.currentLockDuration === 10) {
          this.currentLockDuration = 60; // Set next lock duration to 60 seconds
        } else {
          // Allow the user one more chance to enter the password, and if it's wrong again, disable the button
          this.allowOneMoreAttempt();
        }
      }
    }, 1000); // Decrease lockTimeout every second
  }

  // Allow the user one more chance after the 60-second lock
  allowOneMoreAttempt() {
    this.showAlert('Info', 'You have one more attempt to enter the correct password.');

    // If the next attempt is incorrect, disable the login button permanently
    this.submit = () => {
      if (this.isLocked || this.permanentlyDisabled) return;

      if (this.login.email === this.correctEmail && this.login.password === this.correctPassword) {
        this.showAlert('Success', 'You have logged in successfully!');
        console.log('Login successful: ', this.login);
        this.router.navigate(['/homepage-full']); // Redirect to homepage on successful login
        this.wrongAttempts = 0; // Reset wrong attempts on success
        this.currentLockDuration = 10; // Reset lock duration
      } else {
        this.showAlert('Error', 'Your password is incorrect. Login is now permanently disabled.');
        console.error('Password is incorrect:', this.login.password);

        // Permanently disable the login button after this incorrect attempt
        this.permanentlyDisableLoginButton();
      }
    };
  }

  // Function to permanently disable the login button
  permanentlyDisableLoginButton() {
    this.permanentlyDisabled = true;
    console.error('Login button is permanently disabled.');
  }

  // Function to validate the password according to the criteria
  private validatePassword(password: string): boolean {
    const minLength = 8;
    const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/g;
    const capitalLetterPattern = /[A-Z]/;

    const hasMinLength = password.length >= minLength;
    const hasTwoSymbols = (password.match(symbolPattern) || []).length >= 2;
    const hasCapitalLetter = capitalLetterPattern.test(password);

    return hasMinLength && hasTwoSymbols && hasCapitalLetter;
  }

  // Function to update the validation state when the password changes
  onPasswordChange() {
    this.isPasswordValid = this.validatePassword(this.login.password);
  }

  god() {
    this.router.navigate(['/creat-new-password']);
  }

  dig() {
    this.router.navigate(['/sign-up']);
  }
}
