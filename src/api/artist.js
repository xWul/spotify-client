export default function artist() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/artists/${id}/albums?include_groups=album`),
  }
}
