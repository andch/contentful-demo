interface IBody {
  childMarkdownRemark: {
    excerpt: string
    html: string
  }
}

interface IOnePerson {
  name: string
  slug: string
  body?: IBody
}

export interface IPerson {
  data: {
    contentfulPerson: IOnePerson
  }
}

export interface IPersons {
  data: {
    allContentfulPerson: {
      nodes: [IOnePerson]
    }
  }
}
