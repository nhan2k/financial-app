import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  let pipe: CurrencyFormatPipe;

  beforeEach(() => {
    pipe = new CurrencyFormatPipe();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('normal number formatting', () => {
    it('should format a positive number with USD currency format', () => {
      expect(pipe.transform(1234.5)).toBe('$1,234.50');
    });

    it('should format a larger positive number', () => {
      expect(pipe.transform(1234567.89)).toBe('$1,234,567.89');
    });

    it('should format a negative number', () => {
      expect(pipe.transform(-500.25)).toBe('-$500.25');
    });

    it('should format a small positive number', () => {
      expect(pipe.transform(0.99)).toBe('$0.99');
    });
  });

  describe('zero formatting', () => {
    it('should format zero as "$0.00"', () => {
      expect(pipe.transform(0)).toBe('$0.00');
    });

    it('should format 0.0 as "$0.00"', () => {
      expect(pipe.transform(0.0)).toBe('$0.00');
    });
  });

  describe('null and undefined handling', () => {
    it('should return empty string for null', () => {
      expect(pipe.transform(null)).toBe('');
    });

    it('should return empty string for undefined', () => {
      expect(pipe.transform(undefined)).toBe('');
    });
  });
});
