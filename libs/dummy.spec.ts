import {DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder} from "@angular/forms";
import {DummyPage} from "./dummy.page";


describe("dummy", () => {
  let component: DummyPage;
  let fixture: ComponentFixture<DummyPage>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyPage],
      providers: [
        {
          provide: FormBuilder,
          useClass: FormBuilder,
        },
      ],
      imports: [
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("when no show that in cardMessageText", async () => {
    component.options = [];

    const cardMessageText = component.cardMessageText;

    expect(cardMessageText).toBe(
      "AAAaa"
    );
  });

  it("when exists show that in cardMessageText", async () => {
    component.options = [{label: "xx", value: "yy"}];

    const cardMessageText = component.cardMessageText;

    expect(cardMessageText).toBe(
      "BBBB"
    );
  });
});
