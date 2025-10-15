function status(request, response) {
  response
    .status(200)
    .json({ "Sempre Flamengo": "Vai pra cima deles Mengão!" });
}

export default status; 
