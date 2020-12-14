package web.mlpe_web.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ModulesLogWithUnit {
    private int md_sn;
    private String endts;
    private float modulevoltage_avg;
    private float moduletemperature_avg;
    private float modulewatt_avg;
}
