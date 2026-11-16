var minDays = function(bloomDay, m, k) {
    if(m*k>bloomDay.length){ return -1};
    let low=Number.MAX_SAFE_INTEGER, high=Number.MIN_SAFE_INTEGER;
    for(const day of bloomDay){
        low=Math.min(low,day);
        high=Math.max(high,day);
    }
    let ans=-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(canMake(bloomDay,m,k,mid)){
            ans=mid;
            high=mid-1;
        } else{
            low=mid+1;
        }
    }
    return ans;
};
var canMake=function(bloomDay,m,k,day){
    let c=0, b=0;
    for(const bloom of bloomDay){
        if(bloom<= day){
            c++;
            if(c===k){
                b++;
                c=0;
            }
        } else{
            c=0;
        }
    }
    return b>=m;
}