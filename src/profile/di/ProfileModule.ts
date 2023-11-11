import { createContainer, asClass, asFunction } from 'awilix';
import { WallRepository } from '../../wall/repository/WallRepository';
import { useProfilePresenter } from '../presentation/ProfilePresenter';
import { ProfileRepository } from '../repository/ProfileRepository';

// Create a container
export const profileContainer = createContainer();

export const runProfileDI = () => {
  
    // Register the repositories
    profileContainer.register({
        wallRepository: asClass(WallRepository).singleton(),
        profileRepository: asClass(ProfileRepository).singleton(),
    });
  
    // Register the presenters
    profileContainer.register({
        profilePresenter: asFunction(useProfilePresenter).classic(),
    });

}
