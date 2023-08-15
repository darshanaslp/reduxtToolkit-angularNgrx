import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addAuthor() when form is valid', () => {
    spyOn(component, 'addAuthor').and.callThrough();

    component.authorForm.patchValue({
      first_name: 'John',
      last_name: 'Doe',
    });
    fixture.detectChanges();

    // Simulate button click
    const addButton = fixture.nativeElement.querySelector('.btn-primary');
    addButton.click();

    expect(component.addAuthor).toHaveBeenCalled();
  });
});