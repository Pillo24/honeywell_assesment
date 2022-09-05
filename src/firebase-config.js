import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDpNpWe4lR-3bn7Ph15bTwl5wMJ9lCzTKs',
  authDomain: 'honeywell-f0608.firebaseapp.com',
  projectId: 'honeywell-f0608',
  storageBucket: 'honeywell-f0608.appspot.com',
  messagingSenderId: '685699838823',
  appId: '1:685699838823:web:a5231521ce78b0fcdbf5c2',
  measurementId: 'G-N1ZVQ6VNJV'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
