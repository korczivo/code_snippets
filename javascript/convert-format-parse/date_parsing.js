import dayjs from 'dayjs';

dayjs('15.10.2021').format('DD/MM/YYYY') // 15/10/2021
dayjs('15/10/2021').format('DD.MM.YYYY') // 15.10.2021

dayjs().format()
// current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
