export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`)
  }
}
