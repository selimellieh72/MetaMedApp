
<h1 align="center">
  MetaMedApp
</h1>

<p align="center">
  <a href="#motivation">About</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>

</p>

<p align="center">
  <img src="https://github.com/selimellieh72/MetaMed/blob/main/preview/metamed.gif" alt="animated" />
</p>

## About
MetaMedApp is a mobile application that allows users to purchase and redeem medicine through a convenient and easy-to-use platform. Using MetaMedApp, users can scan their prescription, select the desired medication, and pay for it using a credit card. Once the purchase is complete, a QR code is generated, which can be scanned at a vending machine to retrieve the medication. MetaMedApp was created by Selim Ellieh and Tony Kosseify as a part of a larger project for the "MetaMed" team participating in the WRO22 robotic competition's led by Charbel Daoud. The goal of MetaMedApp is to provide a convenient and efficient way for users to access and purchase their necessary medications.

## Key Features

* Check Vending Machines<br/>
  ![Vending Machines Map](https://github.com/selimellieh72/MetaMed/blob/main/preview/map.png)
  - You can check all available nearby vending machines on the map!

* Scan Prescription<br/>
  ![Scan Prescription](https://github.com/selimellieh72/MetaMed/blob/main/preview/scan.png)
  ![Camera Interface](https://github.com/selimellieh72/MetaMed/blob/main/preview/cam.png)
  ![Credit Card Payment](https://github.com/selimellieh72/MetaMed/blob/main/preview/credit.png)
  ![QR Code](https://github.com/selimellieh72/MetaMed/blob/main/preview/qr.png)
  - On the scan screen, you can scan your prescription by taking an image of it or choosing an existing image.
  - The app will then recognize needed medicines, through making an api call to [Google's Cloud Vision](https://cloud.google.com/vision/docs/ocr).
  - The user can then purchase the medicines on the app through his credit card.
  - After the purchase is complete, a QR-code will be generated that can be redeemed at the nearest vending machine!

* Transcripts Screen<br/>
  ![Transcripts Screen](https://github.com/selimellieh72/MetaMed/blob/main/preview/transcripts.png)
  - On the transcripts screen, you can access all your purchased medicines history.
  - You can also access all your previously generated QR-codes.


## How To Use

> **Warning**
> Before running this application, make sure to replace the 'GOOGLE_MAPS_API_KEY' with your Google Maps API Key at Pages/Maps.js and also replace the 'CLOUD_VISION_API_KEY' with your own Cloud Vision API Key at Api/third_party.js

To clone and run this application, you'll need [Git](https://git-scm.com), [React Native](https://reactnative.dev/), and [Expo](https://expo.dev/). You also need either a physical device or a simulator. From your command line:

```bash
# Clone this repository 
$ git clone https://github.com/selimellieh72/MetaMedApp

# Go into the repository
$ cd MetaMedApp

# Install dependencies
$ npm install

# Run the app
expo start
````

> **Note**
> Make sure to have Expo sdk version 46 otherwise you might run into some issues.



## Credits
- [React](https://reactjs.org)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Google's Cloud Vision](https://cloud.google.com/vision)
- [Google Maps](https://developers.google.com/maps)


---

> GitHub [@NinjaCoder8](https://github.com/NinjaCoder8) &nbsp;&middot;&nbsp;
> LinkedIn [Charbel Daoud](https://www.linkedin.com/in/charbeldaoud/)

> GitHub [@tonyykosseifyy](https://github.com/tonyykosseifyy)

> [selimellieh.me](https://www.selimellieh.me) &nbsp;&middot;&nbsp;
> GitHub [@selimellieh72](https://github.com/selimellieh72) &nbsp;&middot;&nbsp;
> Twitter [@selim_ellieh](https://twitter.com/selim_ellieh)
