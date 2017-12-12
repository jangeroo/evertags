import backend from './backend'

describe('getAllTags', () => {
  it('returns a list of tags', async () => {
    let tags = await backend.getAllTags()
    expect(tags.length).toBeGreaterThanOrEqual(0)
    expect(tags[0]).toHaveProperty('guid')
    expect(tags[0]).toHaveProperty('name')
    expect(tags[0]).toHaveProperty('parentGuid')
    expect(tags[0]).toHaveProperty('updateSequenceNum')
  })
})

describe('generateTagTree', () => {
  it('produces a tree object from a base tag', async () => {
    let tags = await backend.getAllTags()
    let guid = "d397e224-7824-4539-8d06-cac29d2de7db"
    let tree = backend.generateTagTree(tags, guid)
    // console.log('TREE:', tree)
    expect(tree).toHaveProperty('children')
    expect(tree.children.length).toEqual(2)
    let agile = tree.children.find(node => node.name == 'agile')
    expect(agile.children[0].name).toBe('BDD')
  })
})
