import React from 'react';
import {EmojiObjects} from '@material-ui/icons';

const dict = {
    'xtdSubject': <EmojiObjects />
};

export default function(props) {
    const {__typename} = props;

    return dict[__typename];
}
