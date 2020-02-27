import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import de from 'dayjs/locale/de';

dayjs.locale(de);
dayjs.extend(LocalizedFormat);

export default dayjs;

export const toLocaleDateTimeString = (input, format = 'lll') => {
    const value = dayjs(input);
    if (value.isValid()) {
        return value.format(format);
    }
    return '';
};
