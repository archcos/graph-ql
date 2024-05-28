let posts = [
  {id: '1', title: 'Zelda, Tears of the Kingdom'},
  {id: '2', title: 'Final Fantasy 7 Remake'},
  {id: '3', title: 'Elden Ring'},
  {id: '4', title: 'Mario Kart'},
  {id: '5', title: 'Pokemon Scarlet'},
]

let users = [
  {id: '1', name: 'mario'},
  {id: '2', name: 'yoshi'},
  {id: '3', name: 'peach'},
]

let comments = [
  {id: '1', rating: 9, content: 'lorem ipsum', user_id: '1', post_id: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', user_id: '2', post_id: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', user_id: '3', post_id: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', user_id: '2', post_id: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', user_id: '2', post_id: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', user_id: '1', post_id: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', user_id: '3', post_id: '1'},
]

export default { posts, users, comments }