import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <h2 [appHighlight]="'red'">Red Highlight</h2>
    <h2 appHighlight>The Default Highlight (yellow)</h2>
    <h2 [appHighlight]="box.value">The Default Highlight (yellow)</h2>
    <input #box value="green" />
    <h2>No Highlight</h2>`,
})
class TestComponent {}

fdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let highlightDes: DebugElement[];
  let noHighlightDe: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges(); // initial binding

    highlightDes = fixture.debugElement.queryAll(
      By.directive(HighlightDirective)
    );
    noHighlightDe = fixture.debugElement.query(
      By.css('H2:not([ng-reflect-app-highlight])')
    );
  });

  it('should have three highlighted elements', () => {
    expect(highlightDes.length).toBe(3);
  });

  it('should color 1st <h2> background "red" when mouse enter', () => {
    highlightDes[0].triggerEventHandler('mouseenter');
    const bgColor = highlightDes[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('red');
  });

  it('should color 2nd <h2> background default color when mouse enter', () => {
    highlightDes[1].triggerEventHandler('mouseenter');
    const bgColor = highlightDes[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should color 3rd <h2> bind <input> background to value color when mouse enter', () => {
    highlightDes[2].triggerEventHandler('mouseenter');
    const originBgColor = highlightDes[2].nativeElement.style.backgroundColor;
    expect(originBgColor).toBe('green');

    const input = fixture.debugElement.query(By.css('input'))
      .nativeElement as HTMLInputElement;
    input.value = 'blue';
    const bgColor = highlightDes[2].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('green');
  });

  it('last <h2> should not have a customProperty', () => {
    expect(
      noHighlightDe.attributes['ng-reflect-app-highlight']
    ).toBeUndefined();
  });
});
