export default interface Data {
  id: string,
  data: string,
  cardDescription: {
    en: string,
    pt: string
  },
  titulo: {
    en: string,
    pt: string
  },
  tag: [
    string
  ],
  thumb: string,
  altImage: string,
  altPage: {
    contentImages: [
      string
    ],
    projectUrl: string,
    repoUrl: string
  }
}
