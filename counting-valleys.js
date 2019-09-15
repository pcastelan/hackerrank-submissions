/* Counting Valleys:
* Gary is an avid hiker.He tracks his hikes meticulously,
* paying close attention to small details like topography.
* Given Gary's sequence of up and down steps during his last hike, 
* find and print the number of valleys he walked through. 
* link: https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
    let count = 0;
    let valleys = 0;
    for(let i = 0; i < n; i++)
    {
        if(s[i] == 'D')
        {
            count--;
        }
        else
        {
            count++;
        }
        if(count == 0 && i>0 && (s[i] == 'U'))
        {
            valleys++;
        }
        console.log('count: ' + count);
    }

    console.log('valleys: ' + valleys);

    return valleys;
}
