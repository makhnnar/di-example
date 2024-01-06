import { createContainer, asClass, asFunction, Lifetime } from 'awilix';
import { WallRepository } from '../../wall/repository/WallRepository';
import { useProfilePresenter } from '../presentation/ProfilePresenter';
import { ProfileRepository } from '../repository/ProfileRepository';

// Create a container
export const runProfileDI = () => {

    let profileContainer = createContainer();
  
    // Register the repositories
    profileContainer.register({
        wallRepository: asClass(WallRepository),
        profileRepository: asClass(ProfileRepository),
        profilePresenter: asFunction(useProfilePresenter)
    });
  
    return profileContainer
}
