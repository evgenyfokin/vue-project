import {createStore} from "vuex";

export default createStore({
    state: {
        interior: [
            {
                title: "Modern Kitchen",
                type: 'Decor / Architecture',
                imageUrl: require('../assets/img/interior1.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Furniture',
                imageUrl: require('../assets/img/interior2.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Furniture',
                imageUrl: require('../assets/img/interior3.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Furniture',
                imageUrl: require('../assets/img/interior4.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Bed Room',
                imageUrl: require('../assets/img/article1.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Kitchen',
                imageUrl: require('../assets/img/interior2.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Furniture',
                imageUrl: require('../assets/img/interior3.jpg')
            },
            {
                title: "Modern Kitchen",
                type: 'Decor / Living Area',
                imageUrl: require('../assets/img/interior4.jpg')
            }
        ],
        blogDetails: [
            {
                title: '0Let’s Get Solution for Building\n' +
                    'Construction Work',
                imageUrl: require("@/assets/img/article1.jpg"),
                breadCrumbs: 'Interior / Home / Decore',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular ' +
                    'belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
                    'alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                    '\n' +
                    'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
                    'predefined chunks as necessary.',
                quote: 'The details are not the details. \n' +
                    'They make the design.',
                tag: 'Kitchen',
                date: '26 December,2022 '
            },
            {
                title: '1Let’s Get Solution for Building\n' +
                    'Construction Work',
                imageUrl: require("@/assets/img/article2.jpg"),
                breadCrumbs: 'Interior / Home / Decore',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular ' +
                    'belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
                    'alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                    '\n' +
                    'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
                    'predefined chunks as necessary.',
                quote: 'The details are not the details. \n' +
                    'They make the design.',
                tag: 'Bedroom',
                date: '26 December,2022 '
            },
            {
                title: '2Let’s Get Solution for Building\n' +
                    'Construction Work',
                imageUrl: require("@/assets/img/article3.jpg"),
                breadCrumbs: 'Interior / Home / Decore',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular ' +
                    'belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
                    'alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                    '\n' +
                    'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
                    'predefined chunks as necessary.',
                quote: 'The details are not the details. \n' +
                    'They make the design.',
                tag: 'Building',
                date: '26 December,2022 '

            },
            {
                title: '3Let’s Get Solution for Building\n' +
                    'Construction Work',
                imageUrl: require("@/assets/img/article4.jpg"),
                breadCrumbs: 'Interior / Home / Decore',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular ' +
                    'belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
                    'alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                    '\n' +
                    'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
                    'predefined chunks as necessary.',
                quote: 'The details are not the details. \n' +
                    'They make the design.',
                tag: 'Architecture',
                date: '26 December,2022 '
            },
            {
                title: '4Let’s Get Solution for Building\n' +
                    'Construction Work',
                imageUrl: require("@/assets/img/article5.jpg"),
                breadCrumbs: 'Interior / Home / Decore',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular ' +
                    'belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
                    'alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                    '\n' +
                    'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat ' +
                    'predefined chunks as necessary.',
                quote: 'The details are not the details. \n' +
                    'They make the design.',
                tag: 'Kitchen Planning',
                date: '26 December,2022 '
            }
        ],
        articles: [
            {
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December,2022",
                type: "Kitchan Design",
                imageUrl: require("../assets/img/article1.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
            {
                title: "Low Cost Latest Invented Interior Designing\nIdeas.",
                date: "22 December,2022",
                type: "Living Design",
                imageUrl: require("../assets/img/article2.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
            {
                title: "Best For Any Office & Business Interior \nSolution",
                date: "25 December,2022",
                type: "Interior Design",
                imageUrl: require("../assets/img/article3.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
            {
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December,2022",
                type: "Kitchan Design",
                imageUrl: require("../assets/img/article1.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
            {
                title: "Low Cost Latest Invented Interior Designing\nIdeas.",
                date: "22 December,2022",
                type: "Living Design",
                imageUrl: require("../assets/img/article2.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            },
            {
                title: "Best For Any Office & Business Interior \nSolution",
                date: "25 December,2022",
                type: "Interior Design",
                imageUrl: require("../assets/img/article3.jpg"),
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.' +
                    'Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        
    }
})