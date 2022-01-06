# datetime utils
Various date / time utilities
## Usage

### import
```typescript
import * as DT from "oj-datetime-utils"
```

### getDateArr
```typescript
const [year, month, day] = DT.getDateArr(date) // january is 1

```

### getTimeArr
```typescript
const [hour, minute, second] = DT.getTimeArr(date) // hour is 24
```

### getDateTimeArr
```typescript
const [date, time] = DT.getDateTimeArr(date) // uses the previous two functions
```

### getDateStr
```typescript
const str = DT.getDateStr() // 2022-01-16
```

### getTimeStr
```typescript
const str = DT.getTimeStr() // 21-55-06
```

### getDateTimeStr
```typescript
const str = DT.getDateTimeStr() // 2022-01-16-21-55-06
```

### setDate
```typescript
const date = DT.setDate(new Date(), [2021, 1, 20]) // Date Jan 20 2021
```

### setTime
```typescript
const date = DT.setTime(new Date(), [18, 15, 0]) // Date 18:15:00
```

### setDateTime
```typescript
const date = DT.setDateTime(new Date(), [[2021, 1, 20], [18, 15, 0]]) // Date Jan 20 2021 18:15:00
```

### modifyDate
```typescript
const date = DT.modifyDate(new Date(), d => {
  d.setDate(d.getDate() + 1)
  d.setHours(0)
  d.setMinutes(0)
  d.setSeconds(0)
})
```

### betweenTime
```typescript
const between = DT.betweenTime(yesterday, tomorrow, date) // boolean
```