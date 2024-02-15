export const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            title: 'Slug of blog article',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                 // will be ignored if slugify is set
            }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title Image'
        },
        {
            name:'smallDescription',
            type:'text',
            title:'Small Description',
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                }
            ]
        }


    ]
}