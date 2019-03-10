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
            tags: 'Mobile App, UI/UX design'
        },
        {
            eachSlide: `url(${Item_2})`,
            status: 'mobile',
            to: '1'
        },
        {
            eachSlide: `url(${Item_3})`,
            status: 'wordpress',
            to: '2'
        },
        {
            eachSlide: `url(${Item_4})`,
            status: 'logo',
            to: '3'
        },
        {
            eachSlide: `url(${Item_5})`,
            status: 'wordpress',
            to: '4'
        },
        {
            eachSlide: `url(${Item_6})`,
            status: 'webDesign',
            to: '5'
        },
        {
            eachSlide: `url(${Item_7})`,
            status: 'ux/ix',
            to: '6'
        },
        {
            eachSlide: `url(${Item_8})`,
            status: 'branding',
            to: '7'
        },
        {
            eachSlide: `url(${Item_9})`,
            status: 'branding',
            to: '8'
        }
    ]
}

export default function slideInfo(state = mainState) {
    return state;
}