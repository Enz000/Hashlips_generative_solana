"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Fred is a simple guy, algorithmically generate and unique. Take car of him.";
const baseUri = "";
//Added metadata for solana
const collectionName = "Fred NFT";
const symbol = "FRED";
//Define how much % you want from second market sales 1000 = 10%
const seller_fee_basis_points = 250;
// const animation_url  =''
// const external_url = " ";

const layerConfigurations = [
  {
    growEditionSizeTo: 4800,
    namePrefix: "Fred a simple guy.",
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Eyled" },
      { name: "Tatoo" },
      { name: "Tshirt" },
      { name: "Teeth" },
      { name: "Barbe" },
      { name: "Hair" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    namePrefix: "Fred a simple guy.",
    layersOrder: [
      { name: "Background" },
      { name: "SkinAlien", trait: "Skin" },
      { name: "EyledAlien", trait: "Eyled" },
      { name: "TatooAlien", trait: "TatooAlien" },
      { name: "Tshirt" },
      { name: "TeethAlien", trait: "Teeth" },
      { name: "Barbe" },
      { name: "HairAlien", trait: "Hair" },
      { name: "HatAlien", trait: "Hat" },
    ],
  },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  degods: ["paperMask"],
};

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: false,
  brightness: "0%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 5000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};
const collection = {
  name: "FRED NFT",
  family: "FRED",
};
//Added metadata for solana
//Leave uri and type at the current way because they are placeholders for arweave
const properties = {
  files: [
    {
      uri: "image.png",
      type: "image/png",
    },
  ],
  category: "image",
  creators: [
    {
      address: "7MfUWtdkbm4ZYQHrVKBQap23sJ89e7xRoFU1qwu1bkLC",
      share: 100,
    },
  ],
};

module.exports = {
  format,
  baseUri,
  description,
  //Added metadata for solana
  collectionName,
  symbol,
  seller_fee_basis_points,
  // external_url,
  collection,
  properties,

  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  incompatible,
};
