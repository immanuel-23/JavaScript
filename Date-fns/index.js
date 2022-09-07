import { format, formatDistance, formatRelative, subDays } from 'date-fns'

console.log(format(new Date(), "'Today is a' eeee"));
//=> "Today is a Monday"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

formatRelative(subDays(new Date(), 3), new Date())