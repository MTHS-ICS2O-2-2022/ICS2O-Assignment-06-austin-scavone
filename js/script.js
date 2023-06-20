// Copyright (c) austin scavone All rights reserved
//
// Created by: austin scavone
// Created on: May 2023
// This file contains the JS functions for index.html

window.onload = getduck = async () => {
  try {
    // Get duck image
    const badStatusCodes = [duckImage]
    let randomInt = Math.floor(Math.random() * badStatusCodes.length)
    let randomStatusCode = badStatusCodes[randomInt]

    const duckImage = "https://random-d.uk/api" + randomStatusCode
    console.log(randomInt)
    // ouptut duck image
    document.getElementById("duck-image").innerHTML =
      "<img id='duck' src=" + duckImage + "></img>"
  } catch (err) {
    console.error(err)
  }
}
getduck()