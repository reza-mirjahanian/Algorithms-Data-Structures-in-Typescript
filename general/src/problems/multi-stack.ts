class StackMulti {
    private _stack: number[];

    constructor(){
        this._stack = [];
    }


    push(value:number){
        this._stack.push(value);
        return this._stack;
    }


    pop(){
        return this._stack.pop();
    }
}


class SetOfStacks {
    private _threshold: number;
    private _setOfStacks: StackMulti[];
    private _itemsOnStacks : number;

    constructor(threshold = 10){
        this._threshold = threshold;
        this._setOfStacks = [ new StackMulti() ];
        this._itemsOnStacks = 0;
    }

    push(value:number){
        const stackToPushIndex = Math.floor(this._itemsOnStacks / this._threshold);
        if(stackToPushIndex >= this._setOfStacks.length){
            this._setOfStacks.push(new StackMulti());
        }
        this._itemsOnStacks++;
        this._setOfStacks[stackToPushIndex].push(value);
    }


    pop(){
        if(this._itemsOnStacks === 0) return undefined;
        let value;
        let j = this._setOfStacks.length;

        // We always try to pop from the last stack but because popAt may
        // have removed elements from there we try to find the last value
        // that exists on the setOfStacks from the end
        while(!value){
            if(this._setOfStacks[j - 1]){
                value = this._setOfStacks[j - 1].pop();
                j--;
            } else break;
        }

        return value;
    }


    popAt(stackIndex:number){
        if(!this._setOfStacks[stackIndex]) throw Error('Stack at this position');
        return this._setOfStacks[stackIndex].pop();
    }
}


const stackSet = new SetOfStacks(2);
stackSet.push(9);
stackSet.push(3);
stackSet.push(2);
stackSet.push(77);
stackSet.popAt(0)
stackSet.push(5);
stackSet.push(2);
stackSet.push(-7);
stackSet.push(15);

