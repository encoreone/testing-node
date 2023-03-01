const modelViewerTexture = document.getElementById("static-model");

modelViewerTexture.addEventListener("load", () => {
  const materialMain = modelViewerTexture.model.materials[0];
  const materialSecond = modelViewerTexture.model.materials[1];
  const materialThird = modelViewerTexture.model.materials[2];
  const materialFourth = modelViewerTexture.model.materials[3];
  const materialFifth = modelViewerTexture.model.materials[4];

  const createAndApplyTextureOne = (channel, event) => materialMain.pbrMetallicRoughness.setBaseColorFactor(event.target.value); 
  const createAndApplyTextureTwo = (channel, event) => materialSecond.pbrMetallicRoughness.setBaseColorFactor(event.target.value);
  const createAndApplyTextureThree = (channel, event) => materialThird.pbrMetallicRoughness.setBaseColorFactor(event.target.value);
  const createAndApplyTextureFour = (channel, event) => materialFourth.pbrMetallicRoughness.setBaseColorFactor(event.target.value);
  const createAndApplyTextureFive = (channel, event) => materialFifth.pbrMetallicRoughness.setBaseColorFactor(event.target.value);

  document.querySelector('#colors-main').addEventListener('input', event => createAndApplyTextureOne('baseColorTexture', event));
  document.querySelector('#colors-second').addEventListener('input', event => createAndApplyTextureTwo('baseColorTexture', event))
  document.querySelector('#colors-third').addEventListener('input', event => createAndApplyTextureThree('baseColorTexture', event))
  document.querySelector('#colors-fourth').addEventListener('input', event => createAndApplyTextureFour('baseColorTexture', event))
  document.querySelector('#colors-fifth').addEventListener('input', event => createAndApplyTextureFive('baseColorTexture', event))
});