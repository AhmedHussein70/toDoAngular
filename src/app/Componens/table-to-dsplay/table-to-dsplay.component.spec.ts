import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToDsplayComponent } from './table-to-dsplay.component';

describe('TableToDsplayComponent', () => {
  let component: TableToDsplayComponent;
  let fixture: ComponentFixture<TableToDsplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableToDsplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableToDsplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
