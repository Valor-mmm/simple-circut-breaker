import {
  mergeConfigWithDefaults,
  PartialCircuitConfig,
} from './circuitCreation/circuitConfig';
import { createCircuit } from './circuitCreation/circuit';
import { AppliedCircuit, composeCircuitResult } from './circuitCore';
import { anyArray, funcType } from './globalTypes.type';

export const applyCircuit = <P extends anyArray, R>(
  operation: funcType<P, R>,
  config?: PartialCircuitConfig
): AppliedCircuit<P, R> => {
  const circuitConfig = mergeConfigWithDefaults(config);
  const circuit = createCircuit(operation, circuitConfig);

  return composeCircuitResult(circuit);
};
