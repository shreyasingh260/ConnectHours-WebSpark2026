import {describe,it,expect} from 'vitest';
import {overlaps} from '@/lib/business';
describe('booking business logic',()=>{it('detects overlapping appointments',()=>{expect(overlaps('2026-08-12 10:00:00','2026-08-12 10:30:00','2026-08-12 10:15:00','2026-08-12 10:45:00')).toBe(true)});it('allows adjacent appointments',()=>{expect(overlaps('2026-08-12 10:00:00','2026-08-12 10:30:00','2026-08-12 10:30:00','2026-08-12 11:00:00')).toBe(false)})});
