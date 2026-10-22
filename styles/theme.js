// styles/theme.js
import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#2A6F97',      // Blue Navy
  secondary: '#014F86',    // Deep Blue
  accent: '#FFB703',       // Warm Yellow/Orange
  background: '#F8F9FA',   // Light Gray
  cardBg: '#FFFFFF',
  textMain: '#1D2D44',
  textSub: '#6C757D',
  border: '#E9ECEF',
  success: '#38B000',
  danger: '#D90429'
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 14,
    color: COLORS.textSub,
    lineHeight: 20,
  },
  badge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  }
});