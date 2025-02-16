import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckPointComponent } from './password-check-point.component';

describe('PasswordCheckPointComponent', () => {
  let component: PasswordCheckPointComponent;
  let fixture: ComponentFixture<PasswordCheckPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordCheckPointComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordCheckPointComponent, );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have error as false', () => {
    component.error = false;
    expect(component.error).toBeFalsy();
  });

  it('should have error as true', () => {
    component.error = true;
    expect(component.error).toBeTruthy();
  });

  it('should have message as empty', () => {
    component.message = '';
    expect(component.message).toBe('');
  });

  it('should have message as "test"', () => {
    component.message = 'test';
    expect(component.message).toBe('test');
  });

  it('should display message', () => {
    component.message = 'test';
    component.error = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('test');
  });

  it('should display cancel icon on error', () => {
    component.error = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon').textContent).toContain('cancel');
  });

  it('should display check icon on success', () => {
    component.error = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon').textContent).toContain('check_circle');
  });




});
