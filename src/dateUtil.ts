import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import de from 'dayjs/locale/de';

dayjs.locale(de);
dayjs.extend(LocalizedFormat);

export default dayjs;
