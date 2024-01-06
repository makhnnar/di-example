import { useProfilePresenter } from "../profile/presentation/ProfilePresenter";
import { ProfileRepository } from "../profile/repository/ProfileRepository";

import { createContainer, asClass, asFunction } from 'awilix';
import { useWallPresenter } from "../wall/presentation/WallPresenter";
import { WallRepository } from "../wall/repository/WallRepository";

// Create a container
const diContainer = createContainer();

export const runDI = () => {
  
    // Register the repositories
  diContainer.register({
    wallRepository: asClass(WallRepository).singleton(),
    profileRepository: asClass(ProfileRepository).singleton(),
  });
  
  // Register the presenters
  diContainer.register({
    wallPresenter: asFunction(useWallPresenter),
    profilePresenter: asFunction(useProfilePresenter),
  });

  return diContainer

}
