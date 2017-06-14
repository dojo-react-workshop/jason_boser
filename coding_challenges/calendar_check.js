const meetings = [
    {startTime:0, endTime:1},
    {startTime:3, endTime:5},
    {startTime:4, endTime:8},
    {startTime:9, endTime:10},
    {startTime:10, endTime:12}
]

//times represent half hour intervals after 9 am
//merge any long meetings together

const output = [
    {startTime:0, endTime:1},
    {startTime:3, endTime:8},
    {startTime:9, endTime:12}
]

function mergeMeetings(meetings){
    meetings.sort((a,b) => {
        return a.startTime - b.startTime;
    })

    return meetings.reduce((merged,current,index) => {
        if(index === 0) merged.push(current);
        let latest = merged[merged.length-1];

        if(current.startTime > latest.endTime){
            merged.push(current);
        }else if(current.endTime > latest.endTime){
            latest.endTime = current.endTime;
        }
        return merged;
    },[]);
}

console.log(mergeMeetings(meetings))