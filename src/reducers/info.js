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
            status: 'logo'
        },
        {
            eachSlide: `url(${Item_2})`,
            status: 'mobile'
        },
        {
            eachSlide: `url(${Item_3})`,
            status: 'wordpress'
        },
        {
            eachSlide: `url(${Item_4})`,
            status: 'logo'
        },
        {
            eachSlide: `url(${Item_5})`,
            status: 'wordpress'
        },
        {
            eachSlide: `url(${Item_6})`,
            status: 'webDesign'
        },
        {
            eachSlide: `url(${Item_7})`,
            status: 'ux/ix'
        },
        {
            eachSlide: `url(${Item_8})`,
            status: 'branding'
        },
        {
            eachSlide: `url(${Item_9})`,
            status: 'branding'
        }
    ]
}

export default function slideInfo(state = mainState) {
    return state;
}