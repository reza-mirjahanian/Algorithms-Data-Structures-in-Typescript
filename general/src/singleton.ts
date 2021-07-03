console.log("###-- Singleton --###");

class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

}

console.log(Singleton.getInstance() === Singleton.getInstance());

// Maybe with closure
