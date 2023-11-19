import { createContainer, asClass, asFunction } from 'awilix';
import { ProfileRepository } from '../../profile/repository/ProfileRepository';
import { useWallPresenter } from '../presentation/WallPresenter';
import { WallRepository } from '../repository/WallRepository';

// Create a container
export const wallContainer = createContainer();

export const runWallDI = () => {
  
    // Register the repositories
    wallContainer.register({
        wallRepository: asClass(WallRepository).singleton(),
        profileRepository: asClass(ProfileRepository).singleton(),
    });
  
    // Register the presenters
    wallContainer.register({
        wallPresenter: asFunction(useWallPresenter),
    });

}
