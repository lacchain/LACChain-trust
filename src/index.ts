export * from './interfaces/manager/manager';
export { INewAttribute, DidEntity } from 'lacchain-identity';
export { ManagerService } from './services/manager';
export { ErrorsMessages } from './constants/errorMessages';
export * from './dto/lac1/managerDTO';
export { Manager as ManagerEntity } from './entities/manager.entity';
export {
  resolvePublicDirectoryAddress,
  resolveChainOfTrustAddress
} from './config/index';
