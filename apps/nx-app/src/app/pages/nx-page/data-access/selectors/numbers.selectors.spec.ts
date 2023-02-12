import * as fromNumbers from '../reducers/numbers.reducer';
import { selectNumbersState } from './numbers.selectors';

describe('Numbers Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNumbersState({
      [fromNumbers.numbersFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
