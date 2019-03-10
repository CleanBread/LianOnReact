import Item_1 from '../img/body-1.jpg';
import Item_2 from '../img/body-2.jpg';
import Item_3 from '../img/body-3.jpg';
import Item_4 from '../img/body-4.jpg';
import Item_5 from '../img/body-5.jpg';
import Item_6 from '../img/body-6.jpg';
import Item_7 from '../img/body-7.jpg';
import Item_8 from '../img/body-8.jpg';
import Item_9 from '../img/body-9.jpg';

const mainState = {
    slides: [
        {
            eachSlide: `url(${Item_1})`,
            status: 'logo',
            to: '0',
            headline: 'Pereira Creative Agency',
            subheading: 'Branding Design',
            date: 'February 28, 2015',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Mobile App, UI/UX Design'
        },
        {
            eachSlide: `url(${Item_2})`,
            status: 'mobile',
            to: '1',
            headline: 'Desk&Chair Creative Agency',
            subheading: 'Branding Design',
            date: 'May 12, 2014',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Wordpress, Logo'
        },
        {
            eachSlide: `url(${Item_3})`,
            status: 'wordpress',
            to: '2',
            headline: '4Desk Agency',
            subheading: 'Branding Design',
            date: 'Octouber 4, 2018',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Wordpress, Mobile App'
        },
        {
            eachSlide: `url(${Item_4})`,
            status: 'logo',
            to: '3',
            headline: 'Сhandelier Agency',
            subheading: 'Branding Design',
            date: 'July 20, 2013',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Logo, Web Design'
        },
        {
            eachSlide: `url(${Item_5})`,
            status: 'wordpress',
            to: '4',
            headline: 'Corinne Creative Agency',
            subheading: 'Branding Design',
            date: 'December 10, 2013',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Wordpress, UI/UX Design'
        },
        {
            eachSlide: `url(${Item_6})`,
            status: 'webDesign',
            to: '5',
            headline: 'Fork&Spoon Creative Agency',
            subheading: 'Branding Design',
            date: 'May 12, 2019',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Web Design, Logo'
        },
        {
            eachSlide: `url(${Item_7})`,
            status: 'ux/ix',
            to: '6',
            headline: 'There Are Two Chairs Creative Agency',
            subheading: 'Branding Design',
            date: 'September 1, 2011',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'UI/UX Design, Logo'
        },
        {
            eachSlide: `url(${Item_8})`,
            status: 'branding',
            to: '7',
            headline: 'Сouple Creative Agency',
            subheading: 'Branding Design',
            date: 'November 11, 2017',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Branding, Wordpress'
        },
        {
            eachSlide: `url(${Item_9})`,
            status: 'branding',
            to: '8',
            headline: 'Clock Agency',
            subheading: 'Branding Design',
            date: 'April 21, 2015',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
            role: 'Project Designer, Lead Designer, Markerting Head',
            tags: 'Branding, UI/UX Design'
        }
    ]
}

export default function slideInfo(state = mainState) {
    return state;
}