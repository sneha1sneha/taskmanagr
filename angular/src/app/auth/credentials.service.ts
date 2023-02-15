import { Injectable } from '@angular/core';

export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

const credentialsKey = '_app_cache';
// const credentialsKeys = 'userid';
const rolekey = '_app_data'
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private _credentials: any | null = null;
  private _role: any | null = null;
  private _name: any | null = null;
  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = savedCredentials;
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }
  getRole(): number {
    console.log('sas')
    console.log("id", JSON.parse(sessionStorage.getItem("_app_data") || ""))
    return JSON.parse(sessionStorage.getItem("_app_data") || "");

  }

  getUserName(): any {

    return this._name;

  }
  getUserRole(): any {
    debugger
    this._role = sessionStorage.getItem(rolekey);
    let roleidValue = parseInt(this._role)
    return roleidValue;

  }
  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  clearCredentila() {
    this._credentials = null;
    this._role = null
    sessionStorage.removeItem(credentialsKey);
  }
  setCredentials(credentialObj: any) {
    if (credentialObj) {
      // const storage = remember ? localStorage : sessionStorage;
      this._credentials = credentialObj.data.accessToken;
      console.log(this._credentials)
      this._role = credentialObj.data.userRole
      this._name = credentialObj.data.userName;

      // sessionStorage.setItem(credentialsKey, credentialObj.data.accessToken);
      sessionStorage.setItem(rolekey, credentialObj.data.userRole);
      sessionStorage.setItem('name', this._name);
      sessionStorage.setItem(credentialsKey, credentialObj.data.accessToken);
      // sessionStorage.setItem(credentialsKeys, credentialObj.data.userId);

      // console.log("userId", credentialObj.data.userId);
    } else {
      this._credentials = null;
      sessionStorage.removeItem(credentialsKey);
    }
  }
}
