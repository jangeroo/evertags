import axios from 'axios'

class EvertagsAPI {
  getAllTags = () => {
    // The domain is hardcoded here to make the Jest tests run
    // This should be removed to just get from the endpoint itself
    return axios.get('http://localhost:4000/tags')
      .then(response => response.data)
  }

  generateTagTree = (tags, guid) => {
    let tree = tags.find(tag => tag.guid === guid)
    let children = tags.filter(tag => {
      return tag.parentGuid === guid
    })
    tree['children'] = children.map(child => this.generateTagTree(tags, child.guid))
    return tree
  }

  allTagTrees = tags => {
    let rootTags = tags.filter(tag => tag.parentGuid == null)
    return rootTags.map(root => this.generateTagTree(tags, root.guid))
  }
}

export default new EvertagsAPI();
