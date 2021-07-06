import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: "dummy",
  templateUrl: "./dummy.page.html",
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DummyPage
  implements OnInit, OnDestroy
{
  public title = "";
  public id: string;
  public anyArray: any[];
  public selectedAny: any;
  public form: FormGroup;
  public options = [];
  public optionsLoaded: boolean;
  protected TAG = "DummyPage";
  protected log = {
    debug(x) {
      console.log(x);
    }};
  private readonly ngOnDestroy$ = new Subject();

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.log.debug(`call ngOnInit`);

    this.configurePage();
  }

  public ngOnDestroy(): void {
    this.log.debug(`call ngOnDestroy`);

    this.ngOnDestroy$.next();
  }

  public async ionViewWillEnter(): Promise<void> {
    this.log.debug(`call ionViewWillEnter`);

    await this.initPage();
  }

  public get cardMessageText(): string {
    if (this.options.length === 0) {
      this.log.debug("no");
      return "AAAaa";
    }

    this.log.debug("some");
    return "BBBB";
  }

  public submit(): void {
    this.log.debug(`call submit`);

    if (this.form.valid) {
      this.createShareRequest();
      return;
    }

    this.form.markAllAsTouched();
  }

  private createShareRequest(): void {
    this.log.debug(`call createShareRequest`);

    const phone = this.form.get("phone").value;
  }

  public async openConfirmationModal(): Promise<void> {
    this.log.debug(`call openConfirmationModal`);
  }

  private configurePage(): void {
    this.log.debug(`call configurePage`);

    this.form = this.loadFormGroup();
  }

  private async initPage(): Promise<void> {
    this.log.debug(`call initPage`);
  }

  private loadFormGroup(): FormGroup {
    this.log.debug(`call: loadFormGroup`);

    const controls: any = {
      insuredPerson: [null, Validators.required],
      phone: [null, Validators.required],
    };

    return this.formBuilder.group(controls);
  }
}
