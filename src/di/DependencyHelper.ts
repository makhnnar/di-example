
export interface Dependency<T> {

    depKey:string
    depConstructor:T
    depInstance:T|null

}

// Create a simple dependency injection container
export class Container {

    private dependencies: Dependency<any>[] = [];

    // Register a dependency with the container
    public register<T>(name: string, dependency: any): void {
        const depToReg : Dependency<T> = {
            depKey:name,
            depConstructor:dependency,
            depInstance:null
        }
        this.dependencies.push(depToReg)
    }

    // Resolve a dependency from the container
    private _resolve<T>(
        dependenciesToSolve: string[], 
        constructor: (...args: any[]) => T
    ) : T {
        if(dependenciesToSolve.length>0){
            const resolvedDependencies = dependenciesToSolve.map(
                depName => this.resolve<T>(
                    this.dependencies.filter(
                        dep => dep.depKey === depName
                    )[0].depKey
                )
            );
            return constructor(...resolvedDependencies);
        }
        return constructor()
    }

    public resolve<T>(dependency: string): T {
        const depToSol = this.dependencies.filter(
            dep => dep.depKey === dependency
        )[0]
        const depArgs = depToSol.depConstructor as Function
        if(depToSol.depInstance===null){
            const depIns = this._resolve<T>(
                depArgs.arguments,
                depToSol.depConstructor
            )
            depToSol.depInstance = depIns
            return depIns
        }
        return depToSol.depInstance
    }

}

// Example usage:

// Create a new container
const container = new Container();

interface UserService {
    getUser(): string;
}
  
  // Define an interface for the logger
interface Logger {
    log(message: string): void;
}
  
  // Define an interface for the authService
interface AuthService {
    authenticate(): boolean;
}
  
const useLogger = () : Logger => {
    return {
        log: (message:string) =>{
            console.log("message",message)
        }
    }
}

const useUserService = (log:Logger) : UserService => {
    const user = "myUser"
    return {
        getUser: () => {
            log.log(user)
            return user
        }
    }
}

interface FuncParams {
    userService:UserService
    log:Logger
}

function useAuthService({userService,log}:FuncParams) : AuthService {
    return {
        authenticate: () => {
            return userService.getUser().length>0
        }
    }
}

export const testContainer = () => {
    /*container.register<Logger>("useLogger",useLogger)
    container.register<UserService>("useUserService",useUserService)
    container.register<AuthService>("useAuthService",useAuthService)
    
    const authService: AuthService = container.resolve<AuthService>("useAuthService")
    
    console.log(authService.authenticate())*/

    type ParamNames<T> = T extends (...args: infer P) => any ? P : never;
    type ParamNamesAsString<T> = Extract<keyof ParamNames<T>, string>;

    // Example function
    function exampleFunction(param1: string, param2: number): void {
    // function body
    }

    // Log parameter names
    function logParameterNames<T extends (...args: any[]) => any>(func: T): void {
        const paramNames: ParamNamesAsString<string>[] = Object.keys({ ...func });
        
        console.log('Parameter names:', paramNames.join(', '));
    }

    // Call the logParameterNames function with the example function
    logParameterNames(exampleFunction);

    
    // Call the logParameterNames function with the example function
    logParameterNames(useAuthService);

    const someAny = Object.keys(exampleFunction)

    console.log("useAuthService",someAny)

}

