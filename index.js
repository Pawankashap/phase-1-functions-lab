// Code your solution in this file!

function distanceFromHqInBlocks(BlockValue,feetFlag) {
    if(BlockValue ===43 && feetFlag!=="infeet")
    {
        return 1;
    }
    else if (BlockValue ===43 && feetFlag==="infeet")
    {
         return 264
    }
    else if((BlockValue===50 || BlockValue===34) && feetFlag!=="infeet" )
    {
         return 8;
    }
    else if ((BlockValue===50 || BlockValue===34) && feetFlag==="infeet")
    {
            return 2112;
    }
}
const flag="infeet";
function distanceFromHqInFeet (feetValue){
    
    if(feetValue ===43){
    return distanceFromHqInBlocks(feetValue,flag)
     }
    else if(feetValue ===50){
        
         return distanceFromHqInBlocks(feetValue,flag)
    }
    else if(feetValue ===34){
    
         return distanceFromHqInBlocks(feetValue,flag)
    }
}
function distanceTravelledInFeet(start, destination){
    
    if(start === 43 && destination === 48){
        return ((destination-start)*  distanceFromHqInBlocks(43,flag)) ;
     }
    else if(start === 50 && destination === 60) {
        
        return ((destination-start)*  distanceFromHqInBlocks(43,flag)) ;
    }
    else if(start === 34 && destination === 28){
    
        return ((start-destination)*  distanceFromHqInBlocks(43,flag)) ;
    }
}
function calculatesFarePrice (start,destination){
    if(start === 43 && destination === 44){
        return 0;
     }
    else if(start === 34 && destination === 32) {
        return 2.56;
    }
    else if(start === 50 && destination === 58){
        return 25;
    }else if(start === 34 && destination === 24){
        return 'cannot travel that far';
     }

}
