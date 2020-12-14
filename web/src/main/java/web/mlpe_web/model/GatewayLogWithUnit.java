package web.mlpe_web.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GatewayLogWithUnit {
    private int gt_id;
    private String endts;
    private int totalwh_delta;
    private float watt_avg;
}
